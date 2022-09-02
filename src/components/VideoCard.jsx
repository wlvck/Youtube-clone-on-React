import React from 'react';
import {demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoChannelTitle, demoVideoTitle} from "../utils/constants";
import {Card, CardContent, Typography, CardMedia} from "@mui/material";
import {Link} from 'react-router-dom'
import {CheckCircle} from "@mui/icons-material";

const VideoCard = ({videoDetail}) => {
    const videoId = videoDetail.id.videoId
    const snippet = videoDetail.snippet
    return (
        <Card sx={{
            width: {
                md: '320px',
                xs: '100%'
            },
            boxShadow: 'none',
            borderRadius: 0
        }}>
            <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{
                        width: 358,
                        height: 180
                    }}
                >

                </CardMedia>
                <CardContent
                    sx={{
                        backgroundColor: '#1e1e1e',
                        height: '106px'
                    }}
                >
                    <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
                        <Typography
                            variant='subtitle1'
                            fontWeight='bold'
                            color='white'
                        >
                            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                        <Typography
                            variant='subtitle2'
                            fontWeight='bold'
                            color='gray'
                            alignItems='center'
                        >
                            {snippet?.channelTitle || demoChannelTitle}
                            <CheckCircle
                            sx={{
                                fontSize: 12,
                                color: 'gray',
                                ml: '5px'
                            }}
                            />
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    );
};

export default VideoCard;
