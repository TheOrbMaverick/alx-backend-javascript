import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName).catch(() => {
    Promise.reject(new Error(`${fileName} cannot be processed`));
  });

  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : `Error: ${result.reason.message}`,
    })));
}
