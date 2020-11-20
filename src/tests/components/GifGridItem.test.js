import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas GifGridItem", () => {
	const wraper = shallow(<GifGridItem title="Título" url="https://localhost/imagen.jpg" />);

	// beforeEach(() => {
	// 	wraper = shallow(<GifGridItem />);
	// });

	test("Debe mostrar <GifGridItem/> correctamente", () => {
		expect(wraper).toMatchSnapshot();
	});
});
