import {Schema} from '../../data/resource';
import {SendEmailCommand, SESClient} from '@aws-sdk/client-ses';

const sesClient = new SESClient({ region: "ap-southeast-2"});

export const handler: Schema['sendEmail']['functionHandler'] = async (event) => {
  const { name, subjects, contactDetail, message} = event.arguments.params!;
  const sender = `"Contact Hills" <contact@hillsedtech.com>`
  const recipient = "ketang@hillsedtech.com"
  const subject = "New Message from Contact Hills"
  const body = `Name: ${ name }
Subject: ${ subjects }
Contact Detail: ${ contactDetail }
Message: ${ message }`

  const command = new SendEmailCommand({
    Source: sender,
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Subject: { Data: subject },
      Body: {
        Text: { Data: body },
      }
    }
  })

  try {
    const result = await sesClient.send(command);
    console.log(result)
    return `Email sent to ${ recipient }: ${ result.MessageId }`
  } catch (e) {
    console.error(e)
    return `Email failed sending to ${ recipient }: ${ e }`
  }
}
