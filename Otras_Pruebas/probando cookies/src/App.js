import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import { useEffect } from "react";

const cookies = new Cookies();
const useCookieAuth = () => {
  let tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);

  const createCookie = (nameCookie, data) => {
    console.log("create");

    cookies.set(nameCookie, data, {
      sameSite: "strict",
      path: "/",
      expires: tomorrow,
      secure: true,
    });
  };
  const deleteCookie = (nameCookie) => {
    cookies.remove(nameCookie);
  };

  const getNameCookie = (nameCookie) => cookies.get(nameCookie);

  return { createCookie, deleteCookie, getNameCookie };
};

function App() {
  const { createCookie, deleteCookie, getNameCookie } = useCookieAuth();

  useEffect(() => {
    console.log(getNameCookie("User"));
    if (getNameCookie("User")) {
      console.log("GET user; user persist");
    }
  }, [getNameCookie]);

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ background: "gray", minHeight: "100vh" }}>
      <Button variant="primary" onClick={() => createCookie("User")}>
        create cookie
      </Button>
      <Button variant="danger" onClick={() => deleteCookie("User")}>
        delete cookie
      </Button>
    </div>
  );
}

export default App;
