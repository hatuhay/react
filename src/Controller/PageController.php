<?php

namespace Drupal\react\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class PageController.
 */
class PageController extends ControllerBase {

  /**
   * Render.
   *
   * @return string
   *   Return react page string.
   */
  public function form() {
    return [
      '#type' => 'markup',
      '#markup' => '<div id="root"></div>',
      '#attached' => [
        'library' => [
          'react/form',
        ],
      ],
    ];
  }

}
