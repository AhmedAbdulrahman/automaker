import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { ImageIcon, MoreHorizontal, Download, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BoardControlsProps {
  isMounted: boolean;
  onShowBoardBackground: () => void;
  onExportFeatures?: () => void;
  onImportFeatures?: () => void;
}

export function BoardControls({
  isMounted,
  onShowBoardBackground,
  onExportFeatures,
  onImportFeatures,
}: BoardControlsProps) {
  if (!isMounted) return null;

  const buttonClass = cn(
    'inline-flex h-8 items-center justify-center rounded-md px-2 text-sm font-medium transition-all duration-200 cursor-pointer',
    'text-muted-foreground hover:text-foreground hover:bg-accent',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'border border-border'
  );

  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        {/* Board Background Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onShowBoardBackground}
              className={buttonClass}
              data-testid="board-background-button"
            >
              <ImageIcon className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Board Background Settings</p>
          </TooltipContent>
        </Tooltip>

        {/* More Options Menu */}
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <button className={buttonClass} data-testid="board-more-options-button">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>More Options</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={onExportFeatures} data-testid="export-features-menu-item">
              <Download className="w-4 h-4 mr-2" />
              Export Features
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onImportFeatures} data-testid="import-features-menu-item">
              <Upload className="w-4 h-4 mr-2" />
              Import Features
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
}
