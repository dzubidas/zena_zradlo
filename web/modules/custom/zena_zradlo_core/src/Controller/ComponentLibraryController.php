<?php

namespace Drupal\zena_zradlo_core\Controller;

use Drupal\Core\Controller\ControllerBase;

class ComponentLibraryController extends ControllerBase {

  public function content() {
    return [
      '#theme' => 'component_library_page',
      '#empty' => 'Empty',
    ];
  }
}
