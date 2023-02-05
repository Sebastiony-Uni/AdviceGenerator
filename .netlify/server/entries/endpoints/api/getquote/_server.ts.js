const GET = async () => {
  let request = await fetch("https://api.adviceslip.com/advice");
  request = await request.json();
  return new Response(JSON.stringify(request));
};
export {
  GET
};
