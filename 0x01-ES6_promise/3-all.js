import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      const { body } = photo;
      const { firstName } = user;
      const { lastName } = user;
      console.log(body, firstName, lastName);
    });
}
