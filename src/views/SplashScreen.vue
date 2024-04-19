<script setup lang="ts">
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { onMounted, ref } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const positionList = ['Frontend Engineer', 'Vue.js Developer', 'Angular Developer', 'Fullstack Developer']
const target = ref();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

let mroot: any;
const initSuccess = ref(false)
const manager = new THREE.LoadingManager();

manager.onLoad = () => {
    setTimeout(() => {
        initSuccess.value = true
    }, 2000);
};

onMounted(() => {
    target.value.appendChild(renderer.domElement);

    const loader = new GLTFLoader(manager);
    
    loader.load(new URL('../assets/desk.glb', import.meta.url).toString(), function ( gltf: any ) {
        setTimeout(() => {
            mroot = gltf.scene;
            update3DModel(mroot)
            scene.add( mroot );
            animate()
        }, 1900)
    }, undefined, function ( error: any ) {

        console.error( error );

    } );
});

function animate() {
    setTimeout( function() {
        requestAnimationFrame( animate );
        controls.update();
        renderer.render( scene, camera );
    }, 100 / 4 );
}
const update3DModel = (mroot: any) => {
    var bbox = new THREE.Box3().setFromObject(mroot);
    var cent = bbox.getCenter(new THREE.Vector3());
    var size = bbox.getSize(new THREE.Vector3());

    //Rescale the object to normalized space
    mroot.children[0].scale.multiplyScalar(2.7);
    bbox.setFromObject(mroot);
    bbox.getCenter(cent);
    bbox.getSize(size);
    mroot.position.copy(cent).multiplyScalar(-1);
    camera.position.set(0, 2.5, 12);
    window.addEventListener( 'mousemove', onMouseMove, false );
}
function onMouseMove( event: MouseEvent ) {

    camera.position.x = ((event.clientX / window.innerWidth) * 2 - 1) * 8;
    camera.position.y = (-(event.clientY / window.innerHeight) * 2 + 1) * 8;

}
</script>

<template>
    <div v-if="!initSuccess" class="w-full h-screen absolute flex items-center justify-center">
        <svg aria-hidden="true" class="w-16 h-16 text-purple-950 animate-spin fill-primary-bg" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
    </div>
    <div class="w-full h-screen relative bg-gradient-to-r from-purple-950 to-orange-300" v-show="initSuccess">
        <div ref="target" class="absolute -left-52 -top-10 w-full h-full"></div>
        <div class="absolute w-full h-full lg:w-1/2 right-0 flex flex-col items-center justify-center">
            <span class="flex mb-3">
                <h1 class="font-bold text-8xl text-center text-heading-color pb-4">Andy&nbsp;</h1>
                <h1 class="font-bold text-8xl text-center text-primary-bg pb-4">Le</h1>
            </span>
            <h3 v-text-display="{stringList: positionList, wordDisplayTime: 3000}" class="font-semibold text-text-light text-4xl px-5 pb-4 rounded-lg text-center text-white mb-3"></h3>
            <button type="button" @click="$router.push('/details/home')"
            class="w-48 h-12 text-button-text-color p-2 font-semibold bg-primary-bg text-2xl text-center rounded-full inline-flex items-center justify-center pl-4">
                Explore
            </button>
        </div>
    </div>
</template>
<style>
    #app {
        overflow: hidden;
    }
</style>