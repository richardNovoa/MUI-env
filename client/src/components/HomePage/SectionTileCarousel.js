import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Tile from './Tile';

const SectionTileCarousel = ({ section, data }) => {
	return (
		<Box mb={2}>
			<Typography variant='subtitle1' mb={2}>
				{section}
			</Typography>
			<Box className='scrolling-carousel' sx={{ display: 'flex' }}>
				{data.map((item) => (
					<Tile
						key={item.id}
						title={item.title}
						cover={item.cover}
						author={item.author}
					/>
				))}
			</Box>
		</Box>
	);
};

SectionTileCarousel.propTypes = {
	section: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired
};

export default SectionTileCarousel;
