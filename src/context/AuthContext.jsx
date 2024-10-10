import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const updateUser = (data) => {
    setCurrentUser(data);
  }; 

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};




// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       return storedUser ? JSON.parse(storedUser) : null;
//     } catch (error) {
//       console.error("Error parsing user from localStorage:", error);
//       return null;
//     }
//   });

//   const updateUser = (data) => {
//     setCurrentUser(data);
//   };

//   useEffect(() => {
//     try {
//       if (currentUser) {
//         localStorage.setItem("user", JSON.stringify(currentUser));
//       } else {
//         localStorage.removeItem("user");
//       }
//     } catch (error) {
//       console.error("Error saving user to localStorage:", error);
//     }
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, updateUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
