/**
 * Float Input Form Component (Free to use and modify without credit)
 * 
 * Created by Travis Coding (@traviscoding)
 * YouTube: https://youtube.com/@traviscoding
 * 
 * Styled with TailwindCSS
 * Features floating labels with dark mode support
 */
import { useState } from "react";

export default function InputForm() {
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 relative flex justify-center items-center h-screen flex-col">
      <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl w-full max-w-sm">
        <div className="flex flex-row">
          <div className="relative">
            <input
              id="firstname"
              name="firstname"
              type="text"
              className="block w-full px-3 py-2 peer
              border-2 border-zinc-400 dark:border-zinc-700 rounded-lg shadow-sm 
              focus:outline-none focus:ring-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-500
              placeholder-transparent transition-colors focus:placeholder-zinc-400 
              dark:focus:placeholder-zinc-600 dark:bg-zinc-900 dark:focus:bg-zinc-900 dark:text-zinc-200
              dark:not-placeholder-shown:bg-zinc-900 placeholder:text-sm"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label
              htmlFor="firstname"
              className="text-sm px-1 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400
                        transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:text-sm
                        peer-focus:text-zinc-500 peer-focus:bg-white dark:peer-focus:bg-zinc-900 peer-focus:px-1
                        peer-not-placeholder-shown:-translate-y-8 peer-not-placeholder-shown:text-sm
                        peer-not-placeholder-shown:bg-white dark:peer-not-placeholder-shown:bg-zinc-900 peer-not-placeholder-shown:px-1
                        "
            >
              First name
            </label>
          </div>
          <div className="relative ml-4">
            <input
              id="lname"
              name="lname"
              type="text"
              autoComplete="family-name"
              required
              aria-invalid="false"
              className="block w-full px-3 py-2 peer
              border-2 border-zinc-400 dark:border-zinc-700 rounded-lg shadow-sm 
              focus:outline-none focus:ring-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-500
              placeholder-transparent transition-colors focus:placeholder-zinc-400 
              dark:focus:placeholder-zinc-600 dark:bg-zinc-900 dark:focus:bg-zinc-900 dark:text-zinc-200
              dark:not-placeholder-shown:bg-zinc-900 placeholder:text-sm"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label
              htmlFor="lname"
              className="text-sm px-1 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400
                        transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:text-sm
                        peer-focus:text-zinc-500 peer-focus:bg-white dark:peer-focus:bg-zinc-900 peer-focus:px-1
                        peer-not-placeholder-shown:-translate-y-8 peer-not-placeholder-shown:text-sm
                        peer-not-placeholder-shown:bg-white dark:peer-not-placeholder-shown:bg-zinc-900 peer-not-placeholder-shown:px-1
                        "
            >
              Last name
            </label>
          </div>
        </div>

        <div className="relative mt-4">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid="false"
            className="block w-full px-3 py-2 peer
              border-2 border-zinc-400 dark:border-zinc-700 rounded-lg shadow-sm 
              focus:outline-none focus:ring-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-500
              placeholder-transparent transition-colors focus:placeholder-zinc-400 
              dark:focus:placeholder-zinc-600 dark:bg-zinc-900 dark:focus:bg-zinc-900 dark:text-zinc-200
              dark:not-placeholder-shown:bg-zinc-900 placeholder:text-sm"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="email"
            className="text-sm px-1 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 
            transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:text-sm
            peer-focus:text-zinc-500 peer-focus:bg-white  peer-focus:px-1
            peer-not-placeholder-shown:-translate-y-8 peer-not-placeholder-shown:text-sm
            peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1
            dark:text-zinc-400 dark:peer-focus:bg-zinc-900 dark:peer-not-placeholder-shown:bg-zinc-900
            dark:peer-not-placeholder-shown:text-zinc-400 dark:peer-not-placeholder-shown:px-1"
          >
            Email
          </label>
        </div>

        <div className="relative mt-4">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            aria-invalid="false"
            className="block w-full px-3 py-2 peer
              border-2 border-zinc-400 dark:border-zinc-700 rounded-lg shadow-sm 
              focus:outline-none focus:ring-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-500
              placeholder-transparent transition-colors focus:placeholder-zinc-400 
              dark:focus:placeholder-zinc-600 dark:bg-zinc-900 dark:focus:bg-zinc-900 dark:text-zinc-200
              dark:not-placeholder-shown:bg-zinc-900 placeholder:text-sm"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label
            htmlFor="password"
            className="text-sm px-1 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400
                        transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:text-sm
                        peer-focus:text-zinc-500 peer-focus:bg-white dark:peer-focus:bg-zinc-900 peer-focus:px-1
                        peer-not-placeholder-shown:-translate-y-8 peer-not-placeholder-shown:text-sm
                        peer-not-placeholder-shown:bg-white dark:peer-not-placeholder-shown:bg-zinc-900 peer-not-placeholder-shown:px-1
                        "
          >
            Password
          </label>
        </div>

        <button
          className="mt-6 w-full py-2 px-4 bg-zinc-600 hover:bg-zinc-700 text-white font-semibold rounded-md shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2
                     dark:bg-zinc-500 dark:hover:bg-zinc-600 dark:text-zinc-900 dark:focus:ring-zinc-500 dark:focus:ring-offset-zinc-900"
        >
          Submit
        </button>
      </div>
      <div className="p-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <code className="text-xs"></code>
      </div>
    </div>
  );
}
