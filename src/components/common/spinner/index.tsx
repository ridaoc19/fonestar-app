import _color from "../../../styles/index/global/_color";

function Spinner({ color = _color['--base-main'] }: { color?: string }) {
	return (
		<div className='loading-spinner'>
			<div className='loading-spinner-inner'>
				<div className='loading-spinner-circle' style={{ backgroundColor: color }} />
				<div className='loading-spinner-circle' style={{ backgroundColor: color }} />
				<div className='loading-spinner-circle' style={{ backgroundColor: color }} />
				<div className='loading-spinner-circle' style={{ backgroundColor: color }} />
				<div className='loading-spinner-circle' style={{ backgroundColor: color }} />
			</div>
		</div>
	);
}

export default Spinner;
