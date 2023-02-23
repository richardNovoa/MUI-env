import { Box, Typography } from '@mui/material';
import React from 'react';
import PodcastCard from './PodcastCard';

const SectionCardCarousel = ({ section, data }) => {
	return (
		<Box mb={2}>
			<Typography variant='subtitle1' mb={2}>
				{section}
			</Typography>
			<Box sx={{ display: 'flex' }}>
				{data.map((card) => (
					<PodcastCard
						key={card.id}
						cover={card.cover}
						podcast={card.podcast}
						author={card.author}
						description={card.description}
						time={card.time}
					/>
				))}
			</Box>
		</Box>
	);
};

export default SectionCardCarousel;
