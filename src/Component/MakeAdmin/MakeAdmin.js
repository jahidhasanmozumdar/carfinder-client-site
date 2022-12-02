import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  // const {
  //   isLoading,
  //   error,
  //   data: users,
  //   refetch,
  // } = useQuery("users", () =>
  //   fetch("https://carfinder-server-site.vercel.app/home", {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );
  // if (isLoading) {
  //   return <Loading />;
  // }
  const [users, setUser] = useState([]);
  console.log(users);
  useEffect(() => {
    axios
      .get("https://carfinder-server-site.vercel.app/user")
      .then((res) => setUser(res.data));
  }, []);

  const makeAdmin = (email) => {
    fetch(`https://carfinder-server-site.vercel.app/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("successfully admin added");
        // refetch();
      });
  };

  const handleDeleteAdmin = (email) => {
    fetch(`https://carfinder-server-site.vercel.app/adminRemove/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("successfully remove admin");
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user?.email}</td>
                <td>
                  <div className="flex flex-row justify-center items-center gap-2">
                    {user.role !== "admin" ? (
                      <button
                        onClick={() => makeAdmin(user?.email)}
                        className="btn btn-xs"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button disabled className="btn btn-xs">
                        Already Admin
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteAdmin(user?.email)}
                      className="btn btn-xs"
                    >
                      Remove Admin
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
