import QuizCreation from '@/components/QuizCreation';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

export const metadata = {
    title: "Quiz | Quail"
};

const QuizPage = async (props: Props) => {

    const session = await getAuthSession();
    if (!session?.user){
        // if user is not logged in then send them to home page
        redirect('/');
    }

  return (
    <QuizCreation />
  )
}

export default QuizPage