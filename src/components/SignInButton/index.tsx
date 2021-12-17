import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from 'next-auth/react'


export function SignInButton() {
  const { status, data } = useSession();

  console.log(useSession())

  return status === 'authenticated' ? (
    <button type="button" className={styles.signInButton} onClick={() => {signOut()}}>
      <FaGithub color="#0fd361" className={styles.closeIcon} />
      {data.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => {signIn('github')}}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}