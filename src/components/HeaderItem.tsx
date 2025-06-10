import React from 'react';

function HeaderItem({ name, Icon }: { name: string; Icon: React.ElementType }) {
	const Name = name.toUpperCase();
	return (
		<div
			className='
            text-white
            flex items-center gap-3 
			text-[26px]
            lg:text-[18px] font-semibold 
			mb-2
            cursor-pointer hover:underline underline-offset-8
            transition-all duration-300 ease-in-out'
		>
			<Icon />
			<h2 className=''>{Name}</h2>
		</div>
	);
}

export default HeaderItem;
