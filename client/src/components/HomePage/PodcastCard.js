import React from 'react';
import PropTypes from 'prop-types';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography,
	IconButton
} from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddIcon from '@mui/icons-material/Add';

const PodcastCard = (props) => {
	return (
		<div>
			<Box mr={1}>
				<Card sx={{ width: 275 }}>
					<CardHeader
						avatar={
							<img
								src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQcnPK7mC4MSZZPpawAHod9CAtm_zTIu2A5xaDQKF9htONNtlQ'
								width='40'
								height='40'></img>
						}
						title='Stuff You Should Know'
						subheader='iHeartPodcasts'
					/>
					<CardContent>
						<Typography variant='body2' color='text.secondary'>
							Chuck and Josh turn into the Hardy Boys for one of the great
							unsolved mysteries of WWII, a work of art...
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant='contained' startIcon={<AddIcon />}>
							47 min
						</Button>
						<IconButton>
							<PlaylistAddIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Box>
		</div>
	);
};

PodcastCard.propTypes = {};

export default PodcastCard;
