import {Schema} from '../../data/resource';
import {SendEmailCommand, SESClient} from '@aws-sdk/client-ses';

const sesClient = new SESClient({ region: "ap-southeast-2"});

export const handler: Schema['sendEmail']['functionHandler'] = async (event) => {
  const {lastName, firstName, subjects, email, message} = event.arguments.params!;
  const sender = "contact@hillsedtech.com"
  const recipient = "jasonwang@hillsedtech.com"
  const subject = "Test From Amplify SDK"
  const body = `Test From Amplify SDK
LastName: ${ lastName }
FirstName: ${ firstName }
Subject: ${ subjects }
Email: ${ email }
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
