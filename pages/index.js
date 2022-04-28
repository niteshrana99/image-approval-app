import { useEffect, useRef } from 'react';
import Head from 'next/head'
import ApprovalForm from '../components/ApprovalForm'
import ApprovedImages from '../components/ApprovedImages/ApprovedImages'
import Header from '../components/Header'
import Spinner from '../components/Spinner';
import { useAppContext } from '../hooks/useAppContext';
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}


export default function Home() {
  const { appContext } = useAppContext();
  const { isLoading } = appContext.state;
  const ref = useRef(false)

  useEffect(() => {
    const prevData = JSON.parse(localStorage.getItem('imageAppData'))
    if(prevData) {
      appContext.dispatch({type: 'SET_INITIAL_STATE', initialState: prevData})
    }
  }, []);

  useEffect(() => {
    if(ref.current) {
      localStorage.setItem('imageAppData', JSON.stringify(appContext.state))
    }
    ref.current = true;
  }, [appContext.state])

  return (
    <div>
      <Head>
        <title>Image Approval Application</title>
        <meta name="description" content="Image Approval Application" />
      </Head>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      {isLoading && <Spinner />}
      <Header />
      <section>
        <ApprovedImages />
      </section>
      <section>
        <ApprovalForm />
      </section>
      </ErrorBoundary>
    </div>
  )
}
