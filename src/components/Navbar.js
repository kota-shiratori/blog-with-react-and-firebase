import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faHouseFloodWaterCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Navber({ isAuth }) {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faHouseFloodWaterCircleArrowRight} />
          ログイン
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faHouseFloodWaterCircleArrowRight} />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navber;
