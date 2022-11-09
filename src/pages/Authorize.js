import React from "react";
import Authorize from "../components/Authorize";
import { authService } from "../services/authService";
import { langConfigService } from "../services/langConfigService";
import { localStorageService } from "../services/local-storageService";

export default function AuthorizePage() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Authorize
            authService={authService}
            localStorageService={localStorageService}
            langConfigService={langConfigService}
          />
        </div>
      </div>
    </>
  );
}
