import { Box, Button } from "@chakra-ui/react";
import router from "next/router";
import React from "react";
import Link from 'next/link';

const Dashboard = () => {
  if (typeof window !== "undefined") {
    let storage = window.localStorage;

    let user = JSON.parse(storage.getItem("user"));

    // console.log(user);

    let logOut = () => {
      console.log(123);
      storage.removeItem("user");
      router.push("/");
    };

    return (
      <>
        {user !== null ? (
          <>
            {" "}
            <Box>Welcome，{user.name}</Box>
            <Link href="http://localhost:8080/api/users/downloadCSV"><a>Download UserList</a></Link>
            <Button
              onClick={() => {
                logOut();
              }}
            >
              Log out
            </Button>
          </>
        ) : (
          <Box>
            {" "}
            Error login
            {setInterval(function () {
              router.push("/");
            }, 4000)}
          </Box>
        )}{" "}
      </>
    );
  } else {
    return (
      <>
        <Box>
          {" "}
          Error login{" "}
          {setInterval(function () {
            router.push("/");
          }, 4000)}
        </Box>
      </>
    );
  }
};

export default Dashboard;
