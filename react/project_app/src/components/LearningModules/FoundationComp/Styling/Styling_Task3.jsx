
import React from "react";
export default function Styling_Task3({
  name = "Sejal Munshi",
  role = "Frontend Developer",
  location = "Mumbai, India",
  avatar = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80",
  bio = "Building clean, accessible UIs with React and Tailwind. Coffee lover and lifelong learner.",
  followers = 1240,
  projects = 18,
  posts = 72,
  onFollow = () => {},
}) {
  return (
    <article className="max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden ring-1 ring-slate-100 dark:ring-0">
      <div className="p-6 flex flex-col items-center text-center gap-4">
        {/* avatar */}
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-white dark:ring-slate-900 shadow-sm"
        />

        {/* name + role */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{name}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{role} • {location}</p>
        </div>

        {/* bio */}
        <p className="text-sm text-slate-600 dark:text-slate-300 px-2">{bio}</p>

        {/* stats */}
        <div className="w-full mt-2 grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{followers}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Followers</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{projects}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Projects</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{posts}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Posts</span>
          </div>
        </div>

        {/* actions */}
        <div className="flex w-full gap-3 mt-4">
          <button
            onClick={onFollow}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-indigo-600 text-white text-sm font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            {/* simple + icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Follow
          </button>

          <button
            className="flex-0 inline-flex items-center justify-center rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Message
          </button>
        </div>
      </div>

      {/* decorative footer */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
    </article>
  );
}

/*
  Usage example (App.jsx):

  import React from 'react'
  import ProfileCard from './ProfileCard'

  function App(){
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-6">
        <ProfileCard />
      </div>
    )
  }

  export default App;

  Notes:
  - Requires Tailwind CSS configured in your project.
  - Supports dark mode when Tailwind's dark variant is enabled (e.g., class strategy).
  - Customize props to show different avatar/name/stats.
*/
