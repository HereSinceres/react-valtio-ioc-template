import React from 'react';
import { provider, useInstance, useInstances } from 'react-ioc';

import { CameraService } from './camera.service';
import { RenderCircle } from './render-entry/render.circle';
import { RenderCreeper } from './render-entry/render.creeper';
import { RenderCube } from './render-entry/render.cube';
import { RenderLight } from './render-entry/render.light';
import { RenderLine } from './render-entry/render.line';
import { RendererComponent } from './renderer.component';
import { RendererService } from './renderer.service';
import { SceneService } from './scene.service';

const App = () => {
    useInstances(RenderLight
        , RenderCircle,
        //RenderCube,
         RenderCreeper, RenderLine);
    return <RendererComponent />;
};
export const Renderer = provider(
    SceneService,
    CameraService,
    RenderLight,
    RenderCircle,
    RenderCube,
    RenderCreeper,
    RenderLine,
    RendererService
)(App);
