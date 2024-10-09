import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const ChatHistory = ({ chatHistories }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Chat History
      </Typography>
      <List>
        {chatHistories.map((chat, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${chat.customer}: ${chat.message}`}
              secondary={`Timestamp: ${new Date(chat.timestamp).toLocaleString()}`}
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default ChatHistory;
