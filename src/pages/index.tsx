import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../app/router/utils';

interface IMainPageProps {

};

const MainPage:FC<IMainPageProps> = ({}) => {
  return (
    <div className="flex gap-4">
      <Link to={ROUTES.posts}>Posts</Link>
    </div>
  )
};

export default MainPage;