const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env file
});

const sendChatgpt = async (req, res) => {
  try {
    const { message } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use "gpt-3.5-turbo" or "gpt-4"
      messages: [{ role: "user", content: message }],
      temperature: 0.9,
      max_tokens: 150,
    });

    res.status(200).json({
      success: true,
      message: response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { sendChatgpt };
