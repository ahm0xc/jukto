// Inner API for app-level imperative updates
// This allows components to refresh without reactive subscriptions

type RefreshCallback = () => void;
type ShowPluginCallback = (pluginId: string) => void;

class InnerApi {
  private bottomBarRefresh: RefreshCallback | null = null;
  private showPlugin: ShowPluginCallback | null = null;

  // Register the bottom bar's refresh function
  registerBottomBar(refresh: RefreshCallback) {
    this.bottomBarRefresh = refresh;
  }

  // Unregister when component unmounts
  unregisterBottomBar() {
    this.bottomBarRefresh = null;
  }

  // Call this to refresh the bottom bar
  refreshBottomBar() {
    this.bottomBarRefresh?.();
  }

  registerPluginNavigation(showPlugin: ShowPluginCallback) {
    this.showPlugin = showPlugin;
  }

  unregisterPluginNavigation() {
    this.showPlugin = null;
  }

  showBrainrot() {
    this.showPlugin?.("brainrot");
  }

  showAIChat() {
    this.showPlugin?.("ai");
  }
}

// Singleton instance
export const innerApi = new InnerApi();

// Global access for convenience
if (typeof globalThis !== 'undefined') {
  (globalThis as any).app = (globalThis as any).app || {};
  (globalThis as any).app.innerApi = innerApi;
  (globalThis as any).app.showBrainrot = () => innerApi.showBrainrot();
  (globalThis as any).app.showAIChat = () => innerApi.showAIChat();
}
