/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    let message = 'Happy weekend !!!!!!!!!!!!!!!!!!!!!!11';
    res.status(200).send(message);
  };
  