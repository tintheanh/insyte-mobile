import isIOS from '../utils/helpers/is_ios';

const appConfig = {
  postsPerBatch: 30,
  commentsPerBatch: 30,
  captionMaxLength: 150,
  minImageQuality: 0.3,
  maxImageQuality: isIOS() ? 0.8 : 1,
  videoQuality: 0.5,
  searchUsersPerBatch: 10,
  notificationPerBatch: 15,
  tagUsersPerBatch: 10,
  milesRadius: 3,
};

export default appConfig;
