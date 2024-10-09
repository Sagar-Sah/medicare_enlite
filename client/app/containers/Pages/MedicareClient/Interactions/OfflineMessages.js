import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const OfflineMessages = ({ offlineMessages }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Offline Messages
      </Typography>
      <List>
        {offlineMessages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={message.content}
              secondary={`Received at: ${new Date(message.timestamp).toLocaleString()}`}
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default OfflineMessages;
