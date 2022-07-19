import { isEmpty, isNull } from 'lodash'
import {
  SUBSCRIPTION_STATUS,
  TIME_TABLE_SELECT,
  workshopStatus,
  EMPTY_STRING,
  submitted,
  approved,
  DAYS_LIST,
} from 'shared/constants'

export const transformDataTable = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({ ...item, actionMenuItem: false }))
  }
  return []
}
export const transformOmInstructorOneToOneMeetingDataTable = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      id: item.meeting.id,
      meetingId: item.meeting.id,
      interviewName: item.oneToOneMeeting.name,
      interviewId: item.oneToOneAssignment.id,
      track: item.track.name,
      trackId: item.track.id,
      date: item.meeting.startDate,
      status: item.oneToOneAssignment.status,
      actionMenuItem: false,
    }))
  }
  return []
}
export const transformInstructorOneToneMeetingTable = data => {
  if (!isEmpty(data)) {
    return data.map((meeting, meetingIndex) => ({
      id: meeting.meeting.id,
      oneToOneMeetingName: meeting.oneToOneMeeting.name,
      studentName: `${meeting.students[0].firstName} ${
        meeting.students[0].lastName
      }`,
      track: meeting.track.name,
      dateOfMeeting: meeting.meeting.startDate,
      key: meetingIndex,
      assignmentId: meeting.oneToOneAssignment.id,
      actionMenuItem: false,
    }))
  }
  return data
}
export const transformInstructorWorkshopTable = data => {
  if (!isEmpty(data)) {
    return data.map((WS, WSIndex) => ({
      id: WS.meeting.id,
      workshop: WS.workshop.name,
      date: WS.meeting.startDate,
      track: WS.track.name,
      nbrOfStudents: WS.students.length,
      objectif: 'objectif',
      key: WSIndex,
      actionMenuItem: false,
    }))
  }
  return data
}
export const transformOmInstructorWorkshopDataTable = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      id: item.meeting.id,
      meetingId: item.meeting.id,
      workshop: item.workshop.name,
      track: item.track.name,
      trackId: item.track.id,
      scheduleDate: item.meeting.startDate,
      status: item.workshopStatus,
      link: item.workshop.link,
      actionMenuItem: false,
    }))
  }
  return []
}

export const transformInstructorDataTable = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      instructor: `${item.profile.firstName} ${item.profile.lastName}`,
      id: item.profile.id,
      subscriptionDate: item.instructorDetails.createdAt,
      timeTableKey: verifyInstructorTimeTable(item.instructorDetails.timeTable),
      timeTable: item.instructorDetails.timeTable,
      skills: item.instructorDetails.skills,
      actionMenuItem: false,
      instructorDetailsId: item.instructorDetails.id,
      contractType: item.instructorDetails.contractType,
      degree: item.instructorDetails.degree,
      assignedTracks: item.track ? [item.track] : item.tracks,
      primaryAssessmentScore: item.instructorDetails.primaryAssessmentScore,
      secondaryAssessmentScore: item.instructorDetails.secondaryAssessmentScore,
      githubLink: item.instructorDetails.githubLink,
      linkedInLink: item.instructorDetails.linkedInLink,
      certifications: item.instructorDetails.certifications,
      primaryAssessmentDate: item.instructorDetails.primaryAssessmentDate,
      secondaryAssessmentDate: item.instructorDetails.secondaryAssessmentDate,
    }))
  }
  return []
}

export const transformVouchersDataTable = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      track: item.track.name,
      capacity: item.voucher.capacity,
      duration: item.voucher.duration,
      checkpointQuota: item.voucher.checkpointQuota,
      oneToOneQuota: item.voucher.oneToOneQuota,
      id: item.voucher.id,
      actionMenuItem: false,
      startDate: item.voucher.startDate,
      // groupName: item.group ? `${item.group.name} (${item.group.tag})` : 'N/A',
    }))
  }
  return []
}

export const transformStudentDataTableByCom = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      id: item.student.id,
      status: verifyStudentStatus(item.subscribedToRelationship.status),
      student: `${item.student.firstName} ${item.student.lastName}`,
      subscriptionDate: item.subscribedToRelationship.dateEffective,
      expirationDate: item.subscribedToRelationship.expirationDate,
      track: item.defaultTrack.name,
      progress: calculateProgress(
        item.defaultTrack.skillsCount,
        item.subscribedToRelationship.completedSkills,
      ),
    }))
  }
  return []
}

export const transformStudentDataTable = data => {
  if (!isEmpty(data)) {
    return data
      .map(item => ({
        student: `${item.student.firstName} ${item.student.lastName}`,
        id: item.student.id,
        subscriptionDate: item.subscription.dateEffective,
        track: item.track.name,
        trackId: item.track.id,
        status: verifyStudentStatus(item.subscription.status),
        expirationDate: item.subscription.expirationDate,
        target: item.subscription.target,
        source: item.subscription.source,
        actionMenuItem: false,
        progress: calculateProgress(
          item.track.skillsCount,
          item.subscription.completedSkills,
        ),
      }))
      .sort((a, b) => {
        if (
          a.status === SUBSCRIPTION_STATUS.active.labelMessage &&
          b.status === SUBSCRIPTION_STATUS.archived.labelMessage
        ) {
          return -1
        }
        if (
          a.status === SUBSCRIPTION_STATUS.archived.labelMessage &&
          b.status === SUBSCRIPTION_STATUS.active.labelMessage
        ) {
          return 1
        }
        return 0
      })
  }
  return []
}

export const transformInstructorStudentsDataTable = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      student: `${item.student.firstName} ${item.student.lastName}`,
      id: item.student.id,
      trackName: item.defaultTrack.name,
      progress: calculateProgress(
        item.defaultTrack.skillsCount,
        item.subscribedToRelationship.completedSkills,
      ),
      tracksList: item.tracks.map(track => track.name),
      actionMenuItem: false,
      phoneNumber: item.student.phoneNumber,
      groupName: item.group && `${item.group.name} (${item.group.tag})`,
      productTimeSlots:
        item.productTimeSlots && renderProductTimeSlots(item.productTimeSlots),
    }))
  }
  return []
}

const calculateProgress = (skillsCount, completedSkills) => {
  let progressPercentage = (completedSkills / skillsCount) * 100
  if (Number.isNaN(progressPercentage)) {
    progressPercentage = 0
  }
  return `${progressPercentage.toFixed(0)}%`
}

export const transformStudentSubscriptionsDataTable = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      trackName: item.track.name,
      id: item.track.id,
      expirationDate: item.subscription.expirationDate,
      subscriptionDate: item.subscription.dateEffective,
      subscriptionId: item.subscription.source + item.subscription.target,
      status: verifyStudentStatus(item.subscription.status),
      actionMenuItem: false,
      meetingsQuota: `${item.subscription.oneToOneQuota} / ${
        item.subscription.checkpointQuota
      }`,
    }))
  }
  return []
}

export const transformOmInstructorCheckpointReportDataTable = data => {
  let result = []
  if (!isEmpty(data)) {
    result = data.map(item => {
      const { checkpointAssignment, checkpoint, track, student, meeting } = item
      return {
        id: checkpointAssignment.id,
        checkpointAssignmentId: checkpointAssignment.id,
        status: checkpointAssignment.status,
        submissionDate: checkpointAssignment.submissionDate,
        checkpointId: checkpoint.id,
        checkpointName: checkpoint.name,
        trackId: track.id,
        trackName: track.name,
        studentName: `${student.firstName} ${student.lastName}`,
        studentId: student.id,
        meetingDate: meeting,
      }
    })
    return result
  }
  return []
}

export const verifyActionMenuItem = (item, id) => {
  if (item.id === id) {
    return true
  }
  return false
}
export const closeAllActionMenuItem = list =>
  list.map(item => ({
    ...item,
    actionMenuItem: false,
  }))

export const sortFunction = (a, b) => {
  if (typeof a.value === 'string' && typeof b.value === 'string') {
    return a.value.toLowerCase().localeCompare(b.value.toLowerCase())
  }
  if (a.value > b.value) {
    return 1
  }
  if (a.value < b.value) {
    return -1
  }
  return 0
}

export const verifyStudentStatus = status => {
  if (status === SUBSCRIPTION_STATUS.archived.value) {
    return SUBSCRIPTION_STATUS.archived.labelMessage
  }
  return SUBSCRIPTION_STATUS.active.labelMessage
}

export const verifyInstructorTimeTable = timeTable => {
  if (timeTable === TIME_TABLE_SELECT.fullTime.value) {
    return TIME_TABLE_SELECT.fullTime.labelMessage
  }
  return TIME_TABLE_SELECT.partTime.labelMessage
}

const workshopUnlockedDate = item => {
  if (isNull(item.unlockedA)) return null
  return item.unlockedA.dateEffective
}

const workshopScheduledDate = item => {
  if (isNull(item.meeting)) return null
  return item.meeting.startDate
}

const workshopstatus = item => {
  if (isNull(item.unlockedA)) return workshopStatus.locked.index
  if (isNull(item.meeting)) return workshopStatus.planified.index
  return workshopStatus.finished.index
}

export const transformStudentWorkshopsDataTableByManager = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      workshop: item.workshop.name,
      unlockedDate: workshopUnlockedDate(item),
      scheduleDate: workshopScheduledDate(item),
      status: workshopstatus(item),
      link: item.workshop.link,
    }))
  }
  return []
}

const checkpointAssignmentId = item => {
  if (isNull(item.checkpointAssignment)) return null
  return item.checkpointAssignment.id
}

const checkpointStatus = item => {
  if (isNull(item.checkpointAssignment)) return 0
  return item.checkpointAssignment.status
}

const checkpointAssignedInstructor = item => {
  if (isNull(item.owner)) return EMPTY_STRING
  return `${item.owner.firstName} ${item.owner.lastName}`
}

const checkpointSubmissionDate = item => {
  if (checkpointStatus(item) < submitted) return null
  return item.checkpointAssignment.submissionDate
}

const checkpointFinalRateDate = item => {
  if (checkpointStatus(item) < approved) return null
  return item.checkpointAssignment.approvalDate
}

const checkpointMeetingDate = item => {
  if (checkpointStatus(item) < approved) return null
  if (!item.meeting) return null
  return item.meeting.startDate
}

const checkpointPerformance = item => {
  if (checkpointStatus(item) < approved) return '0%'
  return `${Math.round(item.checkpointAssignment.score * 10)}%`
}

export const transformStudentCheckpointsDataTableByManager = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      checkpointAssignmentId: checkpointAssignmentId(item),
      checkpoint: item.checkpoint.name,
      submissionDate: checkpointSubmissionDate(item),
      status: checkpointStatus(item),
      assignedInstructor: checkpointAssignedInstructor(item),
      finalRateDate: checkpointFinalRateDate(item),
      meetingDate: checkpointMeetingDate(item),
      performance: checkpointPerformance(item),
      accumulatedPoints: item.accumulatedPoints,
      experiencePoints: item.experiencePoints,
    }))
  }
  return []
}

export const transformStudentOneToOnesDataTableByManager = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      oneToOneAssignmentId:
        item.oneToOneAssignment && item.oneToOneAssignment.id,
      oneToOne: item.oneToOneMeeting.name,
      unlockedDate:
        item.oneToOneAssignment && item.oneToOneAssignment.unlockDate,
      status: item.oneToOneAssignment ? item.oneToOneAssignment.status : 0,
      assignedInstructor: item.owner
        ? `${item.owner.firstName} ${item.owner.lastName}`
        : '',
      meetingDate: item.meeting && item.meeting.startDate,
      performance: item.oneToOneAssignment
        ? percentageComputing(item.oneToOneAssignment)
        : '',
      accumulatedPoints: item.accumulatedPoints,
      experiencePoints: item.experiencePoints,
    }))
  }
  return []
}

const percentageComputing = data => {
  const { questions } = JSON.parse(data.questions)
  const answers = JSON.parse(data.answers)
  if (!isEmpty(answers) && answers.length === questions.length) {
    let average = 0
    let sum = 0
    for (let i = 0; i < answers.length; i++) {
      if (answers[i]) {
        sum += answers[i].score
      }
    }
    if (questions.length > 0) average = (sum / (questions.length * 2)) * 100
    return Math.round(average)
  }
  return ''
}

export const transformCheckpointsDelayWarningsListData = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      studentName: `${item.student.firstName} ${item.student.lastName}`,
      checkpointName: item.checkpoint.name,
      track: item.track.name,
      submissionDate: item.checkpointAssignment.submissionDate,
      studentId: item.student.id,
      trackId: item.track.id,
    }))
  }
  return []
}

export const transformCheckpointMeetingsDelayWarningsListData = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      studentName: `${item.student.firstName} ${item.student.lastName}`,
      assignedInstructor: `${item.instructor.firstName} ${
        item.instructor.lastName
      }`,
      checkpointName: item.checkpoint.name,
      performance: `${Math.round(item.checkpointAssignment.score * 10)}%`,
      track: item.track.name,
      closingDate: item.checkpointAssignment.approvalDate,
      instructorFeedback: item.checkpointAssignment.report,
      studentId: item.student.id,
      assignedInstructorId: item.instructor.id,
      checkpointId: item.checkpointAssignment.id,
      trackId: item.track.id,
    }))
  }
  return []
}

export const transformOneToOneInterviewsDelayWarningsListData = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      studentName: `${item.student.firstName} ${item.student.lastName}`,
      assignedInstructor: `${item.instructor.firstName} ${
        item.instructor.lastName
      }`,
      oneToOneName: item.oneToOneMeeting.name,
      track: item.track.name,
      interviewDate: item.meeting.startDate,
      studentId: item.student.id,
      assignedInstructorId: item.instructor.id,
      oneToOneId: item.oneToOneAssignment.id,
      trackId: item.track.id,
    }))
  }
  return []
}

export const transformWorkshopsDelayWarningsListData = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      workshopName: item.workshop.name,
      studentsNumber: item.studentsCount,
      track: item.track.name,
      assignedInstructors: item.instructors.map(
        instructor => `${instructor.firstName} ${instructor.lastName}`,
      ),
      trackId: item.track.id,
      workshopLink: item.workshop.link,
    }))
  }
  return []
}

export const transformStudentsPerformancesListData = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      studentName: `${item.student.firstName} ${item.student.lastName}`,
      phoneNumber: item.student.phoneNumber,
      track: item.track.name,
      skillCompletionRate:
        item.learningProgress > 1
          ? '100%'
          : `${Math.round(item.learningProgress * 100)}%`,
      skillCompletionRunRate:
        item.runRate > 1 ? '100%' : `${Math.round(item.runRate * 100)}%`,
      weakOverWeakEvolution: item.weekOverWeekEvolution,
      completedCheckpoints: `${item.numberOfCompletedCheckpoints}/${
        item.track.checkpointCount
      }`,
      checkpointsAverageScore: `${Math.round(
        item.averageCheckpointScore * 100,
      )}%`,
      completedOneToOneInterviews: `${item.numberOfCompletedOneToOneMeetings}/${
        item.track.oneToOneCount
      }`,
      oneToOneInterviewsAverageScore: `${Math.round(
        item.averageOneToOneScore * 100,
      )}%`,
      lastWeekCompletedSkillsNumber: item.numberOfLastWeekCompletedSkills,
      learningTimeSpent: item.totalTimeSpentOnPlatform,
      studentId: item.student.id,
      trackId: item.track.id,
    }))
  }
  return []
}

export const transformInstructorsPerformancesListData = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      instructorName: `${item.insructor.firstName} ${item.insructor.lastName}`,
      phoneNumber: item.insructor.phoneNumber,
      tracks: item.tracks.map(track => track.name),
      checkpoints: item.handledCheckpoints,
      checkpointsMeetings: item.checkpointsMeetingCount,
      oneToOneInterviews: item.oneToOnesCount,
      workshops: item.workshopsCount,
      instructorId: item.insructor.id,
    }))
  }
  return []
}

export const transformHackerspacePerformancesListData = data => {
  if (!isEmpty(data)) {
    return data.map(item => ({
      trackName: item.track.name,
      assignedInstructorsNumber: item.numberOfInstructors,
      subscribedStudentsNumber: item.numberOfStudents,
      notValidatedCheckpointsNumber: item.numberOfUnAssignedCheckpoints,
      checkpointsAverageValidationDuration:
        item.averageCheckpointProcessingTime,
      waitingOneToOneInterviewsNumber: item.numberOfUnlockedOneToOneMeetings,
      oneToOneInterviewsAverageConclusionDuration:
        item.averageOneToOneProcessingTime,
      studentsAskingForWorkshopsNumber: item.numberOfWorkshopRequests,
      learningAverageScore: `${Math.round(item.averageLearningScore * 100)}%`,
      checkpointsAverageScore: `${Math.round(
        item.averageCheckpointScore * 100,
      )}%`,
      oneToOneInterviewsAveragePerformance: `${Math.round(
        item.averageOneToOneScore * 100,
      )}%`,
      trackId: item.track.id,
    }))
  }
  return []
}

export const renderProductTimeSlots = productTimeSlots =>
  productTimeSlots.map(timeSlot => {
    const { id, day, startTime, dueTime } = timeSlot
    return {
      id,
      day: DAYS_LIST[day].key,
      time: `${startTime.substr(0, 5)} - ${dueTime.substr(0, 5)}`,
    }
  })
