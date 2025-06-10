import { useState } from 'react';
import logo from '../assets/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
    const [toggle, setToggle] = useState(false);
    

    // Menu items with their respective icons
	const menu = [
		{ name: 'HOME', icon: HiHome },
		{ name: 'SEARCH', icon: HiMagnifyingGlass },
		{ name: 'WATCHLIST', icon: HiPlus },
		{ name: 'ORIGINALS', icon: HiStar },
		{ name: 'MOVIES', icon: HiPlayCircle },
		{ name: 'SERIES', icon: HiTv },
	];

	return (
		<div className='flex items-center justify-between p-5'>
			<div className='flex items-center gap-8'>
				<img
					src={logo}
					className='w-[115px] object-cover'
				/>
				<div className='hidden lg:flex gap-8'>
					{menu.map((item) => (
						<HeaderItem
							key={item.name}
							name={item.name}
							Icon={item.icon}
						/>
					))}
				</div>
				<div className='flex lg:hidden gap-8'>
					{menu.map(
						(item, index) =>
							index < 3 && (
								<HeaderItem
									key={item.name}
									name={''}
									Icon={item.icon}
								/>
							)
					)}
					<div className='lg:hidden' onClick={() => setToggle(!toggle)}>
						<HeaderItem
							name={''}
							Icon={HiDotsVertical}
						/>
						{toggle? <div className='absolute mt-3 bg-[#121212] 
                                        border-[1px] border-gray-700 
                                        rounded-lg p-3 px-5 py-4'>
							{menu.map(
								(item, index) =>
									index > 2 && (
										<HeaderItem
											key={item.name}
											name={item.name}
											Icon={item.icon}
										/>
									)
							)}
						</div>: null}
					</div>
				</div>
			</div>
			<img
				className='w-[40px] h-[40px] aspect-square rounded-full'
				src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
			/>
		</div>
	);
}

export default Header;
