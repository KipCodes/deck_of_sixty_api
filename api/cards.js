export default function handler(req, res) {
    // Handle GET request
    if (req.method === 'GET') {
      res.status(200).json({
        message: 'This is your card API!',
        cards: [ // Sample response
          { name: "Ace", meaning: "New beginnings" },
          { name: "Two", meaning: "Partnership" },
        ]
      });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  