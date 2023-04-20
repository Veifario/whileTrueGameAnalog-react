import React, { useRef, useState } from "react";
import s from "./index.module.scss";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import {
	gateIndexIncrease,
	addArrowStart,
	addArrowEnd,
} from "../../../redux/actions";
import { useXarrow } from "react-xarrows";
import ArrowDot from "../../ArrowDot";

const NotGate = ({ id }) => {
	const blockRef = useRef(null);
	const updateCoord = useXarrow();
	const dispatch = useDispatch();

	// Arrow selectors
	const settings = useSelector(
		(state) => state.game.connectionSettings.selectedGate
	);
	const arrows = useSelector((state) => state.game.arrows);

	// Z-Index changer
	const index = useSelector((state) => state.game.gateZIndex);

	const handleZindex = (element) => {
		element.style.zIndex = index + 1;
		dispatch(gateIndexIncrease());
	};

	const handleArrowEnd = () => {
		if (settings === "") return;
		else dispatch(addArrowEnd(id));
	};
	const handleArrowStart = () => {
		if (settings === id) return;
		if (settings === "") dispatch(addArrowStart(id));
		else dispatch(addArrowEnd(id));
	};

	const getOutputLogic = (input0) => !input0;

	return (
		<Draggable
			bounds="parent"
			onDrag={updateCoord}
			onStart={() => handleZindex(blockRef.current)}
			onStop={updateCoord}
		>
			<div id={id} className={s.root} ref={blockRef}>
				<ArrowDot
					type="input"
					onClick={handleArrowEnd}
					style={{ top: 23, transform: "translate(-50%)" }}
				/>
				<div className={s.triangle}></div>
				<ArrowDot
					active={getOutputLogic(0)}
					type="output"
					onClick={handleArrowStart}
					style={{ top: 23, transform: "translate(20%)" }}
				/>
				<div className={s.circle}></div>
			</div>
		</Draggable>
	);
};
export default NotGate;
