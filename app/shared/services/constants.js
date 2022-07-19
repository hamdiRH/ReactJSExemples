const auth = () => ({
  login: 'auth/login',
  register: 'auth/register',
  forgetPassword: 'auth/forgot-password',
  checkRegisterToken: (token) => `auth/check-register-token?token=${token}`,
  resetPassword: (token) => `auth/reset-password?token=${token}`,
  refreshToken: 'auth/refresh-tokens',
  logout: 'auth/logout',
})

const user = () => ({
  getProfile: 'users/get-profile',
  fechUsers: (role, sortBy, limit, page) =>
    `users?role=${role}&sortBy=${sortBy}&limit=${limit}&page=${page}`,
  updateUserById: (id) => `users/${id}`,
  addStudents: 'users/invite-students',
  addInstructors: 'users/invite-instructors',
  deleteUserById: (id) => `users/${id}`,
  getStats: `users/stat`,
  completeLesson: `users/complete-lesson`,
  completeQuiz: `users/complete-quiz`,
  updateProfile: `users/update`,
  updateProfilePicture: `users/update-profile-picture`,
  updatePassword: `users/update-password`,
})

const quiz = () => ({
  fechQuiz: (superSkill, sortBy, limit, page) =>
    `quiz?sortBy=${sortBy}&limit=${limit}&page=${page}`,
  createQuiz: `quiz/create-quiz`,
  deleteQuiz: (id) => `quiz/${id}`,
  updateQuiz: (id) => `quiz/${id}`,
  fetchQuizName: `quiz/fetch-quiz-name`,
})

const lesson = () => ({
  fechLesson: (sortBy, limit, page) =>
    `lesson?sortBy=${sortBy}&limit=${limit}&page=${page}`,
  createLesson: `lesson/create-lesson`,
  updateLesson: (id) => `lesson/${id}`,
  deleteLesson: (id) => `lesson/${id}`,
  fetchLessonName: `lesson/fetch-lessons-name`,
})

const skill = () => ({
  fetchSkill: (sortBy, limit, page) =>
    `skill?sortBy=${sortBy}&limit=${limit}&page=${page}`,
  fetchSkillById: (id) => `skill/${id}`,
  updateSkill: (id) => `skill/${id}`,
  deleteSkill: (id) => `skill/${id}`,
  createSkill: `skill/create-skill`,
  fetchSkillName: `skill/fetch-skill-name`,
})

const superSkill = () => ({
  fetchSuperSkill: (sortBy, limit, page) =>
    `superSkill?sortBy=${sortBy}&limit=${limit}&page=${page}`,
  deleteSuperSkill: (id) => `superSkill/${id}`,
  fetchSuperSkillById: (id) => `superSkill/${id}`,
  updateSuperSkill: (id) => `superSkill/${id}`,
  createSuperSkill: `superSkill/create-superSkill`,
  fetchSuperSkillName: `superSkill/superSkill-name`,
})

const track = () => ({
  fetchTracks: (sortBy, limit, page) =>
    `track?sortBy=${sortBy}&limit=${limit}&page=${page}`,
  fetchTrackById: (id) => `track/${id}`,
  createTrack: `track/create-track`,
  deleteTrack: (id) => `track/${id}`,
  updateTrack: (id) => `track/${id}`,
  fetchTracksname: `track/get-tracks-name`,
  AddTrackToStudent: `track/add-track-to-student`,
  getTracksById: 'track/get-tracks-by-id',
})

const voucher = () => ({
  fetchVouchers: (sortBy, limit, page) =>
    `voucher?sortBy=${sortBy}&limit=${limit}&page=${page}`,
  fetchVoucherById: (id) => `voucher/${id}`,
  createVoucher: `voucher`,
  deleteVoucher: (id) => `voucher/${id}`,
  updateVoucher: (id) => `voucher/${id}`,
})

export default {
  baseApiUrl: () => window.baseApiUrl,
  auth,
  user,
  quiz,
  lesson,
  skill,
  superSkill,
  track,
  voucher,
}
