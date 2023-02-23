import { Box, Typography } from '@mui/material';
import React from 'react';
import PodcastCard from './PodcastCard';

const SectionCardCarousel = () => {
	return (
		<Box mb={2}>
			<Typography variant='subtitle1' mb={2}>
				Popular & trending
			</Typography>
			<Box sx={{ display: 'flex' }}>
				<PodcastCard />
				<PodcastCard />
			</Box>
		</Box>
	);
};

export default SectionCardCarousel;
