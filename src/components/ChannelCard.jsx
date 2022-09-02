import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import {CheckCircle} from '@mui/icons-material'
import {demoProfilePicture} from "../utils/constants";

function ChannelCard({channelDetail}) {
    return (
        <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px'
        }}
        >
            <Link to={`/channel/`}>

            </Link>
        </Box>
    );
}

export default ChannelCard;