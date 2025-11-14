export const handler = async () => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ok: true,
      hostSet: !!process.env.SMTP_HOST,
      userSet: !!process.env.SMTP_USER,
      passSet: !!process.env.SMTP_PASS,
      fromSet: !!process.env.SMTP_FROM,
      toSet: !!process.env.MAIL_TO
    })
  };
};


