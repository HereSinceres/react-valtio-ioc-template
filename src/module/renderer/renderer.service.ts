import { inject } from 'react-ioc';
import * as THREE from 'three';

import { CameraService } from './camera.service';
import { SceneService } from './scene.service';

export class RendererService extends THREE.WebGLRenderer {
    private sceneService = inject(this, SceneService);
    private cameraService = inject(this, CameraService);
    constructor() {
        super();
        this.init();
        this.onResize();
    }
    private init() {
        this.setSize(window.innerWidth, window.innerHeight); // 場景大小
        this.setClearColor(0xeeeeee, 1.0); // 預設背景顏色
        this.shadowMap.enabled = true; // 陰影效果
    }
    private onResize() {
        window.addEventListener('resize', () => {
            this.setSize(window.innerWidth, window.innerHeight);
        });
    }
    render2Dom(dom: HTMLDivElement) {
        dom?.appendChild(this.domElement);
        this.update();
    }
    update() {
        requestAnimationFrame(this.update.bind(this));
        this.render(this.sceneService.scene, this.cameraService.camera);
    }
}
