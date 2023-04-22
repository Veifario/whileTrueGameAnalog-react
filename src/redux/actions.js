export const switchToDark = () => ({ type: "DARK_THEME" });
export const switchToLight = () => ({ type: "LIGHT_THEME" });

export const giveAllUserInfo = () => ({ type: "GIVE_USERS_INFO" });

export const giveUserName = (inputValue) => ({
	type: "GIVE_USER_NAME",
	payload: inputValue,
});

export const lvl1_completed = () => ({ type: "LVL1_COMPLETED" });
export const lvl2_completed = () => ({ type: "LVL2_COMPLETED" });
export const lvl3_completed = () => ({ type: "LVL3_COMPLETED" });
export const lvl4_completed = () => ({ type: "LVL4_COMPLETED" });
export const lvl5_completed = () => ({ type: "LVL5_COMPLETED" });
export const lvl6_completed = () => ({ type: "LVL6_COMPLETED" });

export const addUsers = (data) => ({ type: "GIVE_USERS_INFO", payload: data });

// Game Actions

export const fetchLvlLogic = () => ({ type: "FETCH_LVL_LOGIC" });
export const fetchLvlLogicDone = (data) => ({
	type: "FETCH_LVL_LOGIC_DONE",
	payload: data,
});

export const gateIndexIncrease = () => ({ type: "INDEX_INCREASE" });
export const addArrowStart = (id, output) => ({
	type: "ARROW_START_ADD",
	payload: { id, output },
});
export const addArrowEnd = (id) => ({ type: "ARROW_END_ADD", payload: id });

export const removeArrow = (arrows) => ({
	type: "ARROW_REMOVE",
	payload: arrows,
});

export const clearArrows = () => ({ type: "CLEAR_ARROWS" });
