import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Box, Button, Divider, ListItem, ListItemIcon, Paper, Typography, ListItemText, AvatarGroup, List, Tooltip } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useGlobalProvider } from '../utils/themeContext';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
export default function Home() {
  const { colors } = useGlobalProvider()
  return (
    <List className="overflow-x-hidden  h-screen overflow-y-scroll scrollbar-none" >

      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return <Box key={index}>
            <ListItem >
              <ListItemIcon>
                <Avatar src="/avatar1.jpeg" sx={{
                  width: 30,
                  height: 30,
                }} />
              </ListItemIcon>
              <Box className="w-full flex justify-between items-center">
                <ListItemText
                  primary="Achsash Janice"
                  secondary="@_janice"
                ></ListItemText>
                <MoreHorizIcon />
              </Box>
            </ListItem>
            <Box ml={'30px'}>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi consequuntur a. Minus, ex accusamus consectetur ullam id perferendis recusandae!</Typography>
              <Box className="flex  justify-between align-center p-3">

                <Box display="flex" gap={2}>
                  <Tooltip title="Like">
                    <Avatar
                      sx={{
                        bgcolor: colors.yellow[600],
                        cursor: 'pointer',
                        border: 'none !important',
                        height: 25,
                        width: 25,
                      }}

                    >
                      <FavoriteBorderIcon
                        sx={{
                          color: colors.grey[100],
                          fontSize: '1rem'
                        }}
                      />
                    </Avatar>
                  </Tooltip>
                  <Tooltip
                    title="Share"
                  >
                    <Avatar
                      sx={{
                        bgcolor: colors.orange[600],
                        cursor: 'pointer',
                        border: 'none !important',
                        height: 25,
                        width: 25,
                      }}
                    >
                      <ShareIcon
                        sx={{
                          color: colors.grey[100],
                          fontSize: '1rem'
                        }}
                      />
                    </Avatar>

                  </Tooltip>
                </Box>

                <Box className="flex gap-2">
                  <Box className="flex">
                    <ChatBubbleOutlineIcon sx={{
                      color: colors.grey[300],
                    }} />
                    <Typography
                      color={colors.grey[300]}
                      className="text-xs "
                    >10 comments</Typography>
                  </Box>
                  <Typography
                    color={colors.grey[300]}
                    className="text-xs "
                  >1 hour Ago</Typography>

                </Box>
              </Box>
            </Box>
            <Divider />
          </Box>
        })
      }

    </List>
  )

}

