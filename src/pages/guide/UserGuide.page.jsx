import { Typography } from "@material-tailwind/react";

export default function UserGuidePage() {
  return (
    <section>
      <div className="container mx-auto py-5 text-gray-800">
        <Typography variant="h4" className=" text-gray-800 font-popin">
          Digital Diary User Guide
        </Typography>
        <div className=" mt-7 space-y-7">
          <div>
            <Typography variant="h5" className=" font-popin">
              Introduction
            </Typography>
            <Typography className=" mt-3 font-popin">
              Welcome to the Digital Diary! This user guide will help you
              navigate and make the most out of your digital diary experience.
              Whether you want to jot down quick memos, compose poems, or keep
              track of your to-dos, this guide will walk you through the process
              step-by-step.
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className=" font-popin">
              Getting Started
            </Typography>
            <div className=" mt-3">
              <Typography variant="h6" className=" font-popin">
                Sign Up
              </Typography>
              <ol className=" list-decimal pl-4 mt-2 space-y-1">
                <li>
                  <Typography className=" font-popin font-normal">
                    Access the Signup Page:
                  </Typography>
                  <Typography className=" font-popin">
                    Navigate to the signup page from the homepage.
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Enter Your Information:
                  </Typography>
                  <Typography className=" font-popin">
                    Fill in your desired username, email, and password in the
                    provided fields.
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Submit the Form:
                  </Typography>
                  <Typography className=" font-popin">
                    Click the "Sign Up" button to create your account.
                  </Typography>
                </li>
              </ol>
            </div>
            <div className=" mt-3">
              <Typography variant="h6" className=" font-popin">
                Login
              </Typography>
              <ol className=" list-decimal pl-4 mt-2 space-y-1">
                <li>
                  <Typography className=" font-popin font-normal">
                    Access the Login Page:
                  </Typography>
                  <Typography className=" font-popin">
                    Navigate to the login page from the homepage.
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Enter Your Credentials:
                  </Typography>
                  <Typography className=" font-popin">
                    Input your registered email and password.
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Submit the Form:
                  </Typography>
                  <Typography className=" font-popin">
                    Click the "Log In" button to access your account.
                  </Typography>
                </li>
              </ol>
            </div>
            <div className=" mt-3">
              <Typography variant="h6" className=" font-popin">
                Logout
              </Typography>
              <ol className=" list-decimal pl-4 mt-2 space-y-1">
                <li>
                  <Typography className=" font-popin font-normal">
                    Logout:
                  </Typography>
                  <Typography className=" font-popin">
                    Click "Logout" to end your session.
                  </Typography>
                </li>
              </ol>
            </div>
            <div className=" mt-3">
              <Typography variant="h6" className=" font-popin">
                Managing Memos
              </Typography>
              <ol className=" list-decimal pl-4 mt-2 space-y-1">
                <li>
                  <Typography className=" font-popin font-normal">
                    Create Memo
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Read Memo
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Update Memo
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Delete Memo
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Share Memo to others
                  </Typography>
                </li>
              </ol>
            </div>
            <div className=" mt-3">
              <Typography variant="h6" className=" font-popin">
                Managing Poems
              </Typography>
              <ol className=" list-decimal pl-4 mt-2 space-y-1">
                <li>
                  <Typography className=" font-popin font-normal">
                    Create Poem
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Read Poem
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Update Poem
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Delete Poem
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Share Poem to others
                  </Typography>
                </li>
              </ol>
            </div>
            <div className=" mt-3">
              <Typography variant="h6" className=" font-popin">
                Managing Todos
              </Typography>
              <ol className=" list-decimal pl-4 mt-2 space-y-1">
                <li>
                  <Typography className=" font-popin font-normal">
                    Create Todo
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Read Todo
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Update Todo
                  </Typography>
                </li>
                <li>
                  <Typography className=" font-popin font-normal">
                    Delete Todo
                  </Typography>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <Typography className=" font-popin mt-10 font-normal">
          Thank you for using Digital Diary! We hope you enjoy organizing your
          thoughts and tasks with our application.
        </Typography>
      </div>
    </section>
  );
}
