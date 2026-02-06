export async function sendPushNotification(
  expoPushToken: string
) {
  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: expoPushToken,              
      title: 'Movie Time 🎬',
      body: 'Tap to see movie ratings',
      data: { screen: 'Movie' },      
    }),
  });
}
