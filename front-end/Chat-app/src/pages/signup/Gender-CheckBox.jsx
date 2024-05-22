import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex'>
        <label className='label p-2 '>
        <span className='text-base label-text'>Gender:</span>
        </label>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
					/>
				</label>
			</div>
		</div>
  );
}

export default GenderCheckBox
