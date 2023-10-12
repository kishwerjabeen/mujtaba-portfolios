import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {

  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);

  }, [])


  const particlesLoaded = useCallback(async (engine) => { }, []);

  return
  <Particles
  className="w-full h-full absolute translate-z-0"
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={
      {
        fullScreen: { enable: false },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            }
          }
        }
      }
    }

  />
};

export default ParticlesContainer;
