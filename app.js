const state = {
    screens: [
        {
            id: 1,
            heading: 'Secure WiFi Server',
            subheading: 'Turn your device into a portable HTTP server',
            bg: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            image: '',
            device: 's24ultra',
            textColor: '#ffffff',
            imageMode: 'contain',
            mockupScale: 0.2,
            mockupWidth: 1160,
            mockupHeight: 2550,
            mockupY: 0,
            mockupRotate: 0,
            imagePadding: 10,
            headingSize: 110,
            headingPosition: 0,
            subheadingSize: 54,
            subheadingPosition: 0,
            cropX: 0,
            cropY: 0,
            cropWidth: null,
            cropHeight: null,
            showStatusBar: false,
            phoneBackgroundColor: '#000000'
        },
        {
            id: 2,
            heading: 'Real-time Monitoring',
            subheading: 'Track connections and server status instantly',
            bg: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
            image: '',
            device: 's24ultra',
            textColor: '#ffffff',
            imageMode: 'contain',
            mockupScale: 0.2,
            mockupWidth: 1160,
            mockupHeight: 2550,
            mockupY: 0,
            mockupRotate: 0,
            imagePadding: 10,
            headingSize: 110,
            headingPosition: 0,
            subheadingSize: 54,
            subheadingPosition: 0,
            cropX: 0,
            cropY: 0,
            cropWidth: null,
            cropHeight: null,
            showStatusBar: false,
            phoneBackgroundColor: '#000000'
        },
        {
            id: 3,
            heading: 'Easy File Access',
            subheading: 'Browse and download files from any browser',
            bg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            image: '',
            device: 's24ultra',
            textColor: '#ffffff',
            imageMode: 'contain',
            mockupScale: 0.2,
            mockupWidth: 1160,
            mockupHeight: 2550,
            mockupY: 0,
            mockupRotate: 0,
            imagePadding: 10,
            headingSize: 110,
            headingPosition: 0,
            subheadingSize: 54,
            subheadingPosition: 0,
            cropX: 0,
            cropY: 0,
            cropWidth: null,
            cropHeight: null,
            showStatusBar: false,
            phoneBackgroundColor: '#000000'
        },
        {
            id: 4,
            heading: 'Custom Settings',
            subheading: 'Full control over ports, folders, and privacy',
            bg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            image: '',
            device: 's24ultra',
            textColor: '#ffffff',
            imageMode: 'contain',
            mockupScale: 0.2,
            mockupWidth: 1160,
            mockupHeight: 2550,
            mockupY: 0,
            mockupRotate: 0,
            imagePadding: 10,
            headingSize: 110,
            headingPosition: 0,
            subheadingSize: 54,
            subheadingPosition: 0,
            cropX: 0,
            cropY: 0,
            cropWidth: null,
            cropHeight: null,
            showStatusBar: false,
            phoneBackgroundColor: '#000000'
        }
    ],
    activeScreenId: 1
};


document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const previewImg = document.getElementById('screenshot-preview');
    const headingInput = document.getElementById('input-heading');
    const headingSizeInput = document.getElementById('input-heading-size');
    const headingPositionInput = document.getElementById('input-heading-position');
    const subheadingInput = document.getElementById('input-subheading');
    const subheadingSizeInput = document.getElementById('input-subheading-size');
    const subheadingPositionInput = document.getElementById('input-subheading-position');
    const textColorInput = document.getElementById('input-text-color');
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const canvasBackground = document.querySelector('.canvas-background');
    const editableHeading = document.querySelector('.editable-heading');
    const editableSubheading = document.querySelector('.editable-subheading');
    const deviceSelector = document.getElementById('device-selector');
    const deviceMockup = document.querySelector('.device-mockup');
    const statusBarCheckbox = document.getElementById('input-status-bar');
    const phoneBgColorInput = document.getElementById('input-phone-bg-color');
    const btnExportCurrent = document.getElementById('btn-export-current');
    const btnExportAll = document.getElementById('btn-export-all');
    const btnAddScreen = document.getElementById('btn-add-screen');
    const btnCropImage = document.getElementById('btn-crop-image');
    const btnRemoveImage = document.getElementById('btn-remove-image');
    const screensList = document.getElementById('screens-list');

    // Crop modal elements
    const cropModal = document.getElementById('crop-modal');
    const cropImage = document.getElementById('crop-image');
    const cropBox = document.getElementById('crop-box');
    const cropCloseBtn = document.getElementById('crop-close-btn');
    const cropCancelBtn = document.getElementById('crop-cancel-btn');
    const cropApplyBtn = document.getElementById('crop-apply-btn');

    // Controls
    const imageModeSelect = document.getElementById('select-image-mode');
    const mockupScaleInput = document.getElementById('input-mockup-scale');
    const mockupYInput = document.getElementById('input-mockup-y');
    const mockupRotateInput = document.getElementById('input-mockup-rotate');
    const mockupWidthInput = document.getElementById('input-mockup-width');
    const mockupWidthRange = document.getElementById('input-mockup-width-range');
    const mockupHeightInput = document.getElementById('input-mockup-height');
    const mockupHeightRange = document.getElementById('input-mockup-height-range');

    function updateUI() {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        if (!activeScreen) {
            if (state.screens.length > 0) {
                state.activeScreenId = state.screens[0].id;
                return updateUI();
            }
            return;
        }

        // Sync inputs
        headingInput.value = activeScreen.heading;
        headingSizeInput.value = activeScreen.headingSize;
        headingPositionInput.value = activeScreen.headingPosition;
        subheadingInput.value = activeScreen.subheading;
        subheadingSizeInput.value = activeScreen.subheadingSize;
        subheadingPositionInput.value = activeScreen.subheadingPosition;
        textColorInput.value = activeScreen.textColor;
        deviceSelector.value = activeScreen.device;
        imageModeSelect.value = activeScreen.imageMode;
        mockupScaleInput.value = activeScreen.mockupScale;
        mockupYInput.value = activeScreen.mockupY;
        mockupRotateInput.value = activeScreen.mockupRotate;
        statusBarCheckbox.checked = activeScreen.showStatusBar;
        phoneBgColorInput.value = activeScreen.phoneBackgroundColor;
        
        // Update image padding
        const imagePaddingInput = document.getElementById('input-image-padding');
        if (imagePaddingInput) {
            imagePaddingInput.value = activeScreen.imagePadding || 10;
        }

        mockupWidthInput.value = activeScreen.mockupWidth;
        mockupWidthRange.value = activeScreen.mockupWidth;

        mockupHeightInput.value = activeScreen.mockupHeight;
        mockupHeightRange.value = activeScreen.mockupHeight;

        // Apply to canvas
        editableHeading.textContent = activeScreen.heading;
        editableHeading.style.color = activeScreen.textColor;
        editableHeading.style.fontSize = activeScreen.headingSize + 'px';
        editableHeading.style.marginTop = activeScreen.headingPosition + 'px';
        editableSubheading.textContent = activeScreen.subheading;
        editableSubheading.style.color = activeScreen.textColor;
        editableSubheading.style.fontSize = activeScreen.subheadingSize + 'px';
        editableSubheading.style.marginTop = activeScreen.subheadingPosition + 'px';
        canvasBackground.style.background = activeScreen.bg;

        if (activeScreen.image) {
            previewImg.src = activeScreen.image;
            previewImg.style.objectFit = activeScreen.imageMode;
            previewImg.hidden = false;
            dropZone.hidden = true;
        } else {
            previewImg.src = '';
            previewImg.hidden = true;
            dropZone.hidden = false;
        }

        // Device mockup size & scale & position & rotation
        deviceMockup.style.width = activeScreen.mockupWidth + 'px';
        deviceMockup.style.height = activeScreen.mockupHeight + 'px';
        deviceMockup.style.transform = `translateY(${activeScreen.mockupY}px) rotate(${activeScreen.mockupRotate}deg)`;
        deviceMockup.style.backgroundColor = activeScreen.phoneBackgroundColor;
        
        // Also update screen-content background
        const screenContent = document.querySelector('.screen-content');
        if (screenContent) {
            screenContent.style.backgroundColor = activeScreen.phoneBackgroundColor;
        }

        const screenItem = document.querySelector('.screenshot-item');
        screenItem.style.transform = `scale(${activeScreen.mockupScale})`;

        // Device Specific Styles
        const config = devices[activeScreen.device];
        if (config) {
            deviceMockup.style.borderRadius = config.borderRadius;
            deviceMockup.style.borderWidth = config.borderWidth;
            deviceMockup.dataset.notch = config.notchType;
            screenItem.style.width = config.width + 'px';
            screenItem.style.height = config.height + 'px';
        }

        // Background swatch active state
        colorSwatches.forEach(swatch => {
            if (swatch.dataset.bg === activeScreen.bg) {
                swatch.classList.add('active');
            } else {
                swatch.classList.remove('active');
            }
        });

        renderScreensList();
    }

    function renderScreensList() {
        screensList.innerHTML = '';
        state.screens.forEach((screen, index) => {
            const thumb = document.createElement('div');
            thumb.className = `screen-thumb ${screen.id === state.activeScreenId ? 'active' : ''}`;
            thumb.dataset.id = screen.id;

            const label = document.createElement('span');
            label.textContent = `Screen ${index + 1}`;
            thumb.appendChild(label);

            if (state.screens.length > 1) {
                const btnDelete = document.createElement('button');
                btnDelete.className = 'btn-delete-screen';
                btnDelete.textContent = '✕';
                btnDelete.onclick = (e) => {
                    e.stopPropagation();
                    deleteScreen(screen.id);
                };
                thumb.appendChild(btnDelete);
            }

            thumb.addEventListener('click', () => {
                state.activeScreenId = screen.id;
                updateUI();
            });
            screensList.appendChild(thumb);
        });
    }

    function deleteScreen(id) {
        state.screens = state.screens.filter(s => s.id !== id);
        if (state.activeScreenId === id) {
            state.activeScreenId = state.screens[0].id;
        }
        updateUI();
    }

    // Event Listeners
    dropZone.addEventListener('click', () => {
        console.log('Drop zone clicked, opening file picker');
        fileInput.click();
    });
    
    // Make sure file input can be accessed and reset for re-uploads
    fileInput.addEventListener('click', (e) => {
        console.log('File input clicked');
        e.stopPropagation();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('File selected:', file.name);
            const reader = new FileReader();
            reader.onload = (event) => {
                const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
                activeScreen.image = event.target.result;
                console.log('Image loaded and set');
                updateUI();
            };
            reader.readAsDataURL(file);
        }
        // Reset the file input value so the same file can be selected again
        fileInput.value = '';
    });
    
    // Add drag and drop support
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.background = 'rgba(102, 126, 234, 0.25)';
        dropZone.style.borderColor = '#667eea';
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.style.background = 'rgba(102, 126, 234, 0.05)';
        dropZone.style.borderColor = '#667eea';
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.background = 'rgba(102, 126, 234, 0.05)';
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                console.log('Image dropped:', file.name);
                const reader = new FileReader();
                reader.onload = (event) => {
                    const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
                    activeScreen.image = event.target.result;
                    console.log('Dropped image loaded and set');
                    updateUI();
                };
                reader.readAsDataURL(file);
            }
        }
    });

    // Sync Controls Logic
    function handleWidthUpdate(val) {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.mockupWidth = val;
        mockupWidthInput.value = val;
        mockupWidthRange.value = val;
        deviceMockup.style.width = val + 'px';
    }

    function handleHeightUpdate(val) {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.mockupHeight = val;
        mockupHeightInput.value = val;
        mockupHeightRange.value = val;
        deviceMockup.style.height = val + 'px';
    }

    mockupWidthInput.addEventListener('input', (e) => handleWidthUpdate(e.target.value));
    mockupWidthRange.addEventListener('input', (e) => handleWidthUpdate(e.target.value));

    mockupHeightInput.addEventListener('input', (e) => handleHeightUpdate(e.target.value));
    mockupHeightRange.addEventListener('input', (e) => handleHeightUpdate(e.target.value));

    mockupScaleInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.mockupScale = e.target.value;
        document.querySelector('.screenshot-item').style.transform = `scale(${e.target.value})`;
    });

    mockupYInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.mockupY = e.target.value;
        deviceMockup.style.transform = `translateY(${e.target.value}px) rotate(${activeScreen.mockupRotate}deg)`;
    });

    mockupRotateInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.mockupRotate = e.target.value;
        deviceMockup.style.transform = `translateY(${activeScreen.mockupY}px) rotate(${e.target.value}deg)`;
    });

    // Image padding control
    const imagePaddingInput = document.getElementById('input-image-padding');
    if (imagePaddingInput) {
        imagePaddingInput.addEventListener('input', (e) => {
            const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
            activeScreen.imagePadding = parseInt(e.target.value);
            
            // Update preview image styling
            const previewImg = document.getElementById('screenshot-preview');
            if (previewImg && !previewImg.hidden) {
                const padding = parseInt(e.target.value);
                previewImg.style.margin = padding + 'px';
            }
        });
    }

    imageModeSelect.addEventListener('change', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.imageMode = e.target.value;
        updateUI();
    });

    deviceSelector.addEventListener('change', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        const config = devices[e.target.value];
        if (config) {
            activeScreen.device = e.target.value;
            activeScreen.mockupWidth = config.frameWidth;
            activeScreen.mockupHeight = config.frameHeight;
            updateUI();
        }
    });

    statusBarCheckbox.addEventListener('change', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.showStatusBar = e.target.checked;
        updateUI();
    });

    phoneBgColorInput.addEventListener('change', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.phoneBackgroundColor = e.target.value;
        updateUI();
    });

    phoneBgColorInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.phoneBackgroundColor = e.target.value;
        deviceMockup.style.backgroundColor = e.target.value;
        const screenContent = document.querySelector('.screen-content');
        if (screenContent) {
            screenContent.style.backgroundColor = e.target.value;
        }
    });

    // Drag and Drop
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.background = 'rgba(255,255,255,0.1)'; });
    dropZone.addEventListener('dragleave', () => { dropZone.style.background = 'transparent'; });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.background = 'transparent';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
                activeScreen.image = event.target.result;
                updateUI();
            };
            reader.readAsDataURL(file);
        }
    });

    // Text Updates
    headingInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.heading = e.target.value;
        editableHeading.textContent = e.target.value;
    });

    subheadingInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.subheading = e.target.value;
        editableSubheading.textContent = e.target.value;
    });

    textColorInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.textColor = e.target.value;
        editableHeading.style.color = e.target.value;
        editableSubheading.style.color = e.target.value;
    });

    headingSizeInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.headingSize = e.target.value;
        editableHeading.style.fontSize = e.target.value + 'px';
    });

    headingPositionInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.headingPosition = e.target.value;
        editableHeading.style.marginTop = e.target.value + 'px';
    });

    subheadingSizeInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.subheadingSize = e.target.value;
        editableSubheading.style.fontSize = e.target.value + 'px';
    });

    subheadingPositionInput.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.subheadingPosition = e.target.value;
        editableSubheading.style.marginTop = e.target.value + 'px';
    });

    // Contenteditable Sync
    editableHeading.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.heading = e.target.textContent;
        headingInput.value = e.target.textContent;
    });

    editableSubheading.addEventListener('input', (e) => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        activeScreen.subheading = e.target.textContent;
        subheadingInput.value = e.target.textContent;
    });

    // Backgrounds
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
            activeScreen.bg = swatch.dataset.bg;
            updateUI();
        });
    });

    // Add Screen
    btnAddScreen.addEventListener('click', () => {
        const newId = Date.now();
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId) || state.screens[0];
        state.screens.push({
            id: newId,
            heading: 'Secure WiFi Server',
            subheading: 'Turn your device into a portable HTTP server',
            bg: activeScreen.bg,
            image: null,
            device: 's24ultra',
            textColor: '#ffffff',
            imageMode: 'contain',
            mockupScale: 0.3,
            mockupWidth: 1160,
            mockupHeight: 2550,
            mockupY: 0,
            mockupRotate: 0,
            headingSize: 110,
            headingPosition: 0,
            subheadingSize: 54,
            subheadingPosition: 0,
            cropX: 0,
            cropY: 0,
            cropWidth: null,
            cropHeight: null
        });
        state.activeScreenId = newId;
        updateUI();
    });

    // Export
    // Export - capture the canvas-background which has the gradient
    async function exportScreenshot(screenId) {
        const screen = state.screens.find(s => s.id === screenId);
        if (!screen) return;

        try {
            btnExportCurrent.disabled = true;
            btnExportCurrent.textContent = 'Processing...';

            // Get the canvas-background (has the gradient background and full mockup)
            const canvasBackground = document.querySelector('.canvas-background');
            const screenContent = document.querySelector('.screen-content');
            if (!canvasBackground) {
                alert('Canvas background not found');
                return false;
            }

            // Ensure screen-content has the phone background color applied
            if (screenContent && screen.phoneBackgroundColor) {
                screenContent.style.backgroundColor = screen.phoneBackgroundColor;
            }

            // Wait a moment for styles to apply
            await new Promise(resolve => setTimeout(resolve, 50));

            // Capture using html2canvas - capture the full canvas-background like preview
            const canvas = await html2canvas(canvasBackground, {
                scale: 2,
                useCORS: true,
                allowTaint: false,
                logging: false,
                backgroundColor: null,
                removeContainer: true,
                imageTimeout: 5000,
                proxy: null
            });

            // Resize canvas to fit the phone content exactly (remove padding top/bottom)
            const finalCanvas = document.createElement('canvas');
            
            // Calculate scaling to fit the phone into 1080 width while maintaining aspect ratio
            const scale = 1080 / canvas.width;
            const scaledWidth = canvas.width * scale;
            const scaledHeight = canvas.height * scale;
            
            // Set canvas to exact size of scaled image (no extra padding)
            finalCanvas.width = 1080;
            finalCanvas.height = scaledHeight;
            const ctx = finalCanvas.getContext('2d');
            
            // Draw image at top-left (no padding)
            ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight);

            downloadCanvas(finalCanvas, screen);
            btnExportCurrent.disabled = false;
            btnExportCurrent.textContent = 'Download';
            return true;
        } catch (err) {
            console.error('Export error:', err);
            alert(`Export failed: ${err.message}`);
            btnExportCurrent.disabled = false;
            btnExportCurrent.textContent = 'Download';
            return false;
        }
    }

    function drawExportText(ctx, screen, screenX, screenY, screenWidth, screenHeight, scale) {
        const s = scale || 1;

        // Draw heading
        ctx.font = `bold ${screen.headingSize * s}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`;
        ctx.fillStyle = screen.textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Position heading (matching on-screen positioning)
        const headingY = screenY + (200 + screen.headingPosition) * s;
        ctx.fillText(screen.heading, screenX + screenWidth / 2, headingY);

        // Draw subheading
        ctx.font = `${screen.subheadingSize * s}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`;
        
        const subheadingY = screenY + (350 + screen.subheadingPosition) * s;
        ctx.fillText(screen.subheading, screenX + screenWidth / 2, subheadingY);
    }

    function drawTextOverlay(ctx, screen, contentX, contentY, contentWidth, contentHeight, scale) {
        const s = scale || 1;
        
        // Draw heading
        const headingFontSize = screen.headingSize * s;
        ctx.font = `bold ${headingFontSize}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`;
        ctx.fillStyle = screen.textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 2;
        
        // Position heading based on user's position offset
        const headingY = contentY + (300 + screen.headingPosition) * s;
        ctx.fillText(screen.heading, contentX + contentWidth / 2, headingY);

        // Draw subheading
        const subheadingFontSize = screen.subheadingSize * s;
        ctx.font = `${subheadingFontSize}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`;
        
        // Position subheading
        const subheadingY = contentY + (450 + screen.subheadingPosition) * s;
        ctx.fillText(screen.subheading, contentX + contentWidth / 2, subheadingY);
    }

    function downloadCanvas(canvas, screen) {
        const link = document.createElement('a');
        link.download = `screenshot-${screen.heading.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }

    // Single page download
    btnExportCurrent.addEventListener('click', async () => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        if (activeScreen) {
            await exportScreenshot(activeScreen.id);
        }
    });

    // Export all screens
    btnExportAll.addEventListener('click', async () => {
        const originalActiveScreenId = state.activeScreenId;
        btnExportAll.disabled = true;
        btnExportAll.textContent = 'Exporting...';
        
        for (const s of state.screens) {
            state.activeScreenId = s.id;
            updateUI();
            await new Promise(r => setTimeout(r, 300));
            await exportScreenshot(s.id);
        }
        
        state.activeScreenId = originalActiveScreenId;
        updateUI();
        btnExportAll.disabled = false;
        btnExportAll.textContent = 'Export All';
    });

    // Crop Functionality
    let cropState = {
        isMoving: false,
        isResizing: false,
        resizeHandle: null,
        startX: 0,
        startY: 0,
        offsetX: 0,
        offsetY: 0
    };

    function createCropHandles() {
        // Remove existing handles
        cropBox.querySelectorAll('.crop-handle').forEach(h => h.remove());

        // Create new handles
        const corners = ['nw', 'ne', 'sw', 'se'];
        const edges = ['n', 's', 'w', 'e'];
        
        [...corners, ...edges].forEach(position => {
            const handle = document.createElement('div');
            handle.className = `crop-handle ${position}`;
            cropBox.appendChild(handle);
        });
    }

    function openCropModal() {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        if (!activeScreen || !activeScreen.image) {
            alert('Please upload an image first');
            return;
        }

        // Use the img element that's already in the DOM to display the image
        cropImage.src = activeScreen.image;
        cropImage.onload = () => {
            // Get BOTH the natural dimensions and displayed dimensions
            const naturalWidth = cropImage.naturalWidth;
            const naturalHeight = cropImage.naturalHeight;
            activeScreen.imageWidth = naturalWidth;
            activeScreen.imageHeight = naturalHeight;
            
            // Get the displayed dimensions
            const imgRect = cropImage.getBoundingClientRect();
            
            // Store the scale ratio between natural and displayed sizes
            const scaleX = naturalWidth / imgRect.width;
            const scaleY = naturalHeight / imgRect.height;
            
            console.log('Image loaded:', { naturalWidth, naturalHeight, displayWidth: imgRect.width, displayHeight: imgRect.height, scaleX, scaleY });
            
            // Initialize crop box - 80% of displayed image size
            let boxWidth = imgRect.width * 0.8;
            let boxHeight = imgRect.height * 0.8;
            let boxX = imgRect.left + (imgRect.width - boxWidth) / 2;
            let boxY = imgRect.top + (imgRect.height - boxHeight) / 2;

            cropBox.style.width = boxWidth + 'px';
            cropBox.style.height = boxHeight + 'px';
            cropBox.style.left = boxX + 'px';
            cropBox.style.top = boxY + 'px';

            createCropHandles();
        };

        cropModal.classList.remove('hidden');
    }

    function closeCropModal() {
        cropModal.classList.add('hidden');
    }

    function applyCrop() {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        if (!activeScreen) return;

        try {
            // Get bounding rectangles
            const cropBoxRect = cropBox.getBoundingClientRect();
            const cropImageRect = cropImage.getBoundingClientRect();
            
            // Natural (full resolution) image dimensions
            const imgNaturalWidth = cropImage.naturalWidth;
            const imgNaturalHeight = cropImage.naturalHeight;
            
            // Displayed image dimensions
            const displayedWidth = cropImageRect.width;
            const displayedHeight = cropImageRect.height;
            
            // Scale factors from displayed to natural size
            const scaleX = imgNaturalWidth / displayedWidth;
            const scaleY = imgNaturalHeight / displayedHeight;
            
            console.log('Natural dimensions:', { imgNaturalWidth, imgNaturalHeight });
            console.log('Displayed dimensions:', { displayedWidth, displayedHeight });
            console.log('Scale factors:', { scaleX, scaleY });
            
            // Calculate crop box position relative to the image (in display coordinates)
            const cropBoxLeftInImage = Math.max(0, cropBoxRect.left - cropImageRect.left);
            const cropBoxTopInImage = Math.max(0, cropBoxRect.top - cropImageRect.top);
            const cropBoxWidth = cropBoxRect.width;
            const cropBoxHeight = cropBoxRect.height;
            
            console.log('Crop box in display coords:', { 
                left: cropBoxLeftInImage, 
                top: cropBoxTopInImage, 
                width: cropBoxWidth, 
                height: cropBoxHeight 
            });
            
            // Convert from display coordinates to natural image coordinates
            const cropX = cropBoxLeftInImage * scaleX;
            const cropY = cropBoxTopInImage * scaleY;
            const cropWidth = cropBoxWidth * scaleX;
            const cropHeight = cropBoxHeight * scaleY;
            
            console.log('Crop in natural coords:', { cropX, cropY, cropWidth, cropHeight });

            // Create a new image from the data URL to work with
            const tempImg = new Image();
            tempImg.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = Math.round(cropWidth);
                canvas.height = Math.round(cropHeight);
                
                const ctx = canvas.getContext('2d');
                
                try {
                    // Draw the cropped portion from the full resolution image
                    ctx.drawImage(
                        tempImg,
                        Math.round(cropX),
                        Math.round(cropY),
                        Math.round(cropWidth),
                        Math.round(cropHeight),
                        0,
                        0,
                        Math.round(cropWidth),
                        Math.round(cropHeight)
                    );

                    const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.95);
                    
                    activeScreen.image = croppedDataUrl;
                    activeScreen.cropX = cropX;
                    activeScreen.cropY = cropY;
                    activeScreen.cropWidth = cropWidth;
                    activeScreen.cropHeight = cropHeight;
                    
                    console.log('Crop successful');
                    updateUI();
                    closeCropModal();
                    
                } catch (canvasErr) {
                    console.error('Canvas error:', canvasErr);
                    alert('Unable to crop this image. Please try uploading it again.');
                    closeCropModal();
                }
            };
            
            tempImg.onerror = () => {
                alert('Unable to load image for cropping.');
            };
            
            // Use the data URL from the active screen
            tempImg.src = activeScreen.image;
            
        } catch (err) {
            console.error('Crop error:', err);
            alert('Error cropping image: ' + err.message);
        }
    }

    // Improved crop box interactions
    cropBox.addEventListener('mousedown', (e) => {
        const handle = e.target.closest('.crop-handle');
        
        if (handle) {
            // Resizing
            cropState.isResizing = true;
            cropState.resizeHandle = handle.className.replace('crop-handle ', '');
        } else if (e.target === cropBox || e.target.closest('.crop-box')) {
            // Moving
            cropState.isMoving = true;
        }

        cropState.startX = e.clientX;
        cropState.startY = e.clientY;
        cropState.offsetX = cropBox.offsetLeft;
        cropState.offsetY = cropBox.offsetTop;
        cropState.width = cropBox.offsetWidth;
        cropState.height = cropBox.offsetHeight;
    });

    document.addEventListener('mousemove', (e) => {
        if (!cropState.isMoving && !cropState.isResizing) return;

        const imgRect = cropImage.getBoundingClientRect();
        const deltaX = e.clientX - cropState.startX;
        const deltaY = e.clientY - cropState.startY;

        if (cropState.isMoving) {
            // Move crop box
            let newX = cropState.offsetX + deltaX;
            let newY = cropState.offsetY + deltaY;

            // Boundary constraints - keep within image bounds
            newX = Math.max(imgRect.left, Math.min(newX, imgRect.right - cropState.width));
            newY = Math.max(imgRect.top, Math.min(newY, imgRect.bottom - cropState.height));

            cropBox.style.left = newX + 'px';
            cropBox.style.top = newY + 'px';
        } else if (cropState.isResizing) {
            // Resize crop box
            const handle = cropState.resizeHandle;
            let newLeft = cropState.offsetX;
            let newTop = cropState.offsetY;
            let newWidth = cropState.width;
            let newHeight = cropState.height;

            // Horizontal resize
            if (handle.includes('w')) {
                newWidth = Math.max(50, cropState.width - deltaX);
                newLeft = Math.min(cropState.offsetX + cropState.width - 50, cropState.offsetX + deltaX);
            }
            if (handle.includes('e')) {
                newWidth = Math.max(50, cropState.width + deltaX);
            }

            // Vertical resize
            if (handle.includes('n')) {
                newHeight = Math.max(50, cropState.height - deltaY);
                newTop = Math.min(cropState.offsetY + cropState.height - 50, cropState.offsetY + deltaY);
            }
            if (handle.includes('s')) {
                newHeight = Math.max(50, cropState.height + deltaY);
            }

            // Boundary constraints - keep within image bounds
            newLeft = Math.max(imgRect.left, Math.min(newLeft, imgRect.right - 50));
            newTop = Math.max(imgRect.top, Math.min(newTop, imgRect.bottom - 50));
            newWidth = Math.min(newWidth, imgRect.right - newLeft);
            newHeight = Math.min(newHeight, imgRect.bottom - newTop);

            cropBox.style.left = newLeft + 'px';
            cropBox.style.top = newTop + 'px';
            cropBox.style.width = newWidth + 'px';
            cropBox.style.height = newHeight + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        cropState.isMoving = false;
        cropState.isResizing = false;
        cropState.resizeHandle = null;
    });

    // Event listeners for crop modal
    btnCropImage.addEventListener('click', openCropModal);
    
    btnRemoveImage.addEventListener('click', () => {
        const activeScreen = state.screens.find(s => s.id === state.activeScreenId);
        if (activeScreen) {
            activeScreen.image = '';
            activeScreen.imageWidth = 0;
            activeScreen.imageHeight = 0;
            activeScreen.cropX = 0;
            activeScreen.cropY = 0;
            activeScreen.cropWidth = 0;
            activeScreen.cropHeight = 0;
            updateUI();
        }
    });
    
    cropCloseBtn.addEventListener('click', closeCropModal);
    cropCancelBtn.addEventListener('click', closeCropModal);
    cropApplyBtn.addEventListener('click', applyCrop);

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !cropModal.classList.contains('hidden')) {
            closeCropModal();
        }
    });

    // Initial Sync
    updateUI();
});
