import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_CHORE, UPDATE_CHORE, DELETE_CHORE, GET_CHORES } from "../utils/actions";
import "./style.css";

