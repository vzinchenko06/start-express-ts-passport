import app from './app';

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.info('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  // eslint-disable-next-line no-console
  console.info('  HealthCheck: http://localhost:%d/api/health-check\n', app.get('port'));
  // eslint-disable-next-line no-console
  console.info('  Press CTRL-C to stop\n');
});

export default server;
