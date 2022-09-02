import {Box, Stack} from '@mui/material'
import {VideoCard, ChannelCard} from './index'

const MyComponent = ({videos}) => {
    const videos_list = videos.map((video, index) => {
        return (
            <Box key={index}>
                {
                    video.id.videoId && <VideoCard videoDetail={video}/>
                }
                {
                    video.id.channelId && <ChannelCard channelDetail={video}/>
                }
            </Box>
        )
    })
    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
            {videos_list}
        </Stack>
    );
};

export default MyComponent;
